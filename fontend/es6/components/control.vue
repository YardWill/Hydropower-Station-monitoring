  <template>
    <div class="block content">
        <div>
            <span class="demonstration">系统状态：{{ this.state ? 'on':'off'}}</span>
        </div>
        <div>
            <span class="wrapper">
                <el-button v-on:click="start" :plain="true" type="success">开启系统</el-button>
                <el-button v-on:click="stop" :plain="true" type="danger">关闭系统</el-button>
            </span>
        </div>
    </div>
</template>
<style>
.content {
    margin: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
<script type="text/babel">
module.exports = {
    data() {
        return {
            state: true,
        }
    },
    created() {
        this.$http.get('/state').then((res) => {
            this.state = res.body;
        })
    },
    methods: {
        start() {
            this.$http.get('/start').then((res) => {
                this.state = true;
            })
        },
        stop() {
            this.$http.get('/stop').then((res) => {
                this.state = false;
            })
        },
    }
}
</script>
