<template>
    <el-table :data="list" style="width: 100%">
        <el-table-column prop="name" label="名称">
        </el-table-column>
        <el-table-column prop="value" label="数值">
        </el-table-column>
    </el-table>
</template>
<style>

</style>
<script type="text/babel">
module.exports = {
    data() {
        return {
            list: [{ name: 1, value: 2 }],
        }
    },
    created() {
        this.$http.get('/json').then((res) => {
            const list = res.body.data.map(e => {
                return {
                    name: e.name,
                    value: res.body.state ? parseInt(Math.random() * 40) : 0,
                }
            });
            console.log(list)
            this.list = list;
        })
        setInterval(() => {
            this.$http.get('/json').then((res) => {
                const list = res.body.data.map(e => {
                    return {
                        name: e.name,
                        value: res.body.state ? parseInt(Math.random() * 40) : 0,
                    }
                });
                this.list = list;
            })
        }, 5000)

    }
}
</script>
