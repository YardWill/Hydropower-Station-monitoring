  <template>
    <el-table :data="list" style="width: 100%">
        <el-table-column prop="startTime" label="故障开始时间">
        </el-table-column>
        <el-table-column prop="endTime" label="故障结束时间">
        </el-table-column>
        <el-table-column prop="note" label="故障描述">
        </el-table-column>
    </el-table>
</template>
<style>

</style>
<script type="text/babel">
module.exports = {
    data() {
        return {
            list: [],
        }
    },
    created() {
        this.$http.get('/alert').then((res) => {
            this.list = res.body;
        })
    }
}
</script>
