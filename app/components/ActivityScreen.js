export default {
    props: ['idp'],
    emits: ['ready', 'close'],
    template: `
    <modal-dialog class="h-full w-full bg-black flex justify-center items-center">
        <div class="text-center mx-auto w-fit h-fit"><loading-status v-if="loading">Cargando</loading-status></div>
        <div :class="loading?'opacity-0 fixed':'w-full h-full grow'">
            <iframe src="app/activities/Pintura" frameborder="0" class="w-full h-full overflow-hidden p-2"></iframe>
        </div>
        <transition>
            <participation-id v-if="ended && idp" :idp="idp"></participation-id>
        </transition>
</modal-dialog>
    `,
    data () {
        return {
            loading: true,
            ended: false
        }
    },
    methods: {
        handlerPostMessages(event) {
            if(!event.data || typeof event.data !== 'string'){
                return false
            }
            var message = JSON.parse(event.data);
            if (message.hasOwnProperty("state")) {

                if (message.state === "gameopen") {
                    this.stateGameopen()
                } else if (message.state === "btn_gameclose") {
                    this.stateGameclose()
                } else if (message.state === "gameover") {
                    if(message.score){
                        this.stateGameover(message.score)
                    }
                } else {
                    console.log("Unknown state: " + message.state);
                }
            }
        },
        stateGameopen () {
            this.loading = false
        },
        stateGameclose () {
            this.$emit('close')
        },
        stateGameover (score) {
            this.ended = true
            this.$emit('ready', score)
        }
    },
    mounted() {
        window.addEventListener("message", (e)=>{
            this.handlerPostMessages(e)
        });
    },
}