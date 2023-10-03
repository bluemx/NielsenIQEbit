export default {
    emits: ['ready'],
    template: `
        <div class="bg-white text-black p-5 text-center w-fit mx-auto">
            <div v-if="SurveyID">
                <loading-status v-if="loading">
                    Verficando identificador  
                    <span class="text-xs">{{SurveyID}}</span>
                </loading-status>
            </div>
            <div v-if="error"><div v-html="error"></div></div>
        </div>
    `,
    data () {
        return {
            loading: true,
            SurveyID: false,
            error: false
        }
    },
    methods: {
        init (){
            let uri = window.location.search.substring(1); 
            let params = new URLSearchParams(uri);
            this.SurveyID = params.get('SurveyID')
            this.verify()
        },
        async verify () {
            if(this.SurveyID) {
                const res = await axios.post(window.api+'/ValidateSurvey', {
                    SurveyID: this.SurveyID
                })
                setTimeout(()=>{

                    this.loading = false
                    if(res.data.d == -1){
                        this.error = '<strong class="h5">¡Gracias por jugar!</strong><br>Ya hemos registrado tu participación.'
                    } else {
                        // OK PROCEED
                        this.$emit('ready', this.SurveyID)
                    }
                }, 1000)
            } else {
                this.error = 'Error en identificador'
                this.loading = false
            }
        }
    },
    mounted() {
        this.init()
    },
}