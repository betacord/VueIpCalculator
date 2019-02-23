<template>
    <div>
        <form @submit="checkForm">
            <div class="form-group">
                <label for="ip">IP address</label>
                <input type="text" class="form-control" id="ip" placeholder="Enter IP address"
                       @input="ip = $event.target.value">
                <small v-if="errors.find(x => x.field === 'ip')" id="ip-help" class="form-text text-danger">
                    Provide the IP address.
                </small>
            </div>

            <div class="form-group">
                <label for="mask">Mask</label>
                <input type="number" class="form-control" id="mask" placeholder="Enter network mask"
                       @input="mask = $event.target.value" min="1" max="255">
                <small v-if="errors.find(x => x.field === 'mask')" id="mask-help" class="form-text text-danger">
                    Provide the network mask.
                </small>
            </div>

            <button type="submit" class="btn btn-primary">Calc</button>
        </form>

        <hr>
        <div class="form-group">
            <label for="net-address">Network address</label>
            <input type="text" class="form-control" id="net-address" v-model="netAddress" disabled>
        </div>

        <div class="form-group">
            <label for="broadcast-address">Broadcast address</label>
            <input type="text" class="form-control" id="broadcast-address" v-model="broadcastAddress" disabled>
        </div>

        <div class="form-group">
            <label for="host-count">Count of hosts in this network</label>
            <input type="text" class="form-control" id="host-count" v-model="countOfHosts" disabled>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Calculator",
        data() {
            return {
                errors: [],
                ip: '',
                mask: 0,
                netAddress: null,
                broadcastAddress: null,
                countOfHosts: null,
                endpoint: 'http://localhost:3000'
            }
        },
        methods: {
            checkForm(e) {
                if (this.ip && this.mask) {
                    this.getScores();
                    return true;
                }

                if (this.ip === '') {
                    this.errors.push({
                        field: 'ip',
                        text: 'IP address is required'
                    })
                }

                if (this.mask === 0) {
                    this.errors.push({
                        field: 'mask',
                        text: 'Mask is required'
                    })
                }

                e.preventDefault();
            },
            getScores() {
                axios.get(`${this.endpoint}/networks?ip=${this.ip}&mask=${this.mask}`)
                    .then(res => {
                        this.netAddress = res.data.network;
                        this.broadcastAddress = res.data.broadcast;
                        this.countOfHosts = res.data.count;
                    }).catch(err => {
                        alert(err);
                })
            }
        }
    }
</script>