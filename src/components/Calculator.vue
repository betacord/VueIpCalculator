<template>
    <div>
        <form>
            <div class="form-group">
                <label for="ip">IP address</label>
                <input type="text" class="form-control" id="ip" placeholder="Enter IP address">
                <small id="ip-help" class="form-text text-muted">Provide the IP address.</small>
            </div>

            <div class="form-group">
                <label for="mask">Mask</label>
                <input type="number" class="form-control" id="mask" placeholder="Enter network mask" min="1" max="255">
                <small id="mask-help" class="form-text text-muted">Provide the network mask.</small>
            </div>

            <button type="submit" class="btn btn-primary">Calc</button>
        </form>

        <hr>
        <div class="form-group">
            <label for="net-address">Network address</label>
            <input type="text" class="form-control" id="net-address" disabled>
        </div>

        <div class="form-group">
            <label for="broadcast-address">Broadcast address</label>
            <input type="text" class="form-control" id="broadcast-address" disabled>
        </div>

        <div class="form-group">
            <label for="host-count">Count of hosts in this network</label>
            <input type="text" class="form-control" id="host-count" disabled>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Calculator"
    }
</script>

<style scoped>

</style>