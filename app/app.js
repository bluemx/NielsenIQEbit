import LoadingStatus from './components/LoadingStatus.js';
import ModalDialog from './components/ModalDialog.js';
import SurveyID from './components/SurveyID.js'
import FormCollect from './components/FormCollect.js'
import CertificatesList from './components/CertificatesList.js'
import ActivityScreen from './components/ActivityScreen.js'
import ParticipationID from './components/ParticipationID.js';

import certis from './certificates.js'
import TermsConditions from './components/TermsConditions.js';

window.api = 'https://bluetest.mx/Nielsen/Services.aspx'

const { createApp } = Vue
const { createPinia } = Pinia;
const pinia = createPinia()





const app = createApp({
    data () {
        return {
            appState: 0,
            SurveyID: null,
            FormData: null,
            Certificate: null,
            Score: 0,
            IDP: null,
            IP: null,
            //
            certificatesobj: certis.list
        }
    },
    methods: {
        storeSurvey(data){
            this.SurveyID = data
            this.appState = 1
        },
        storeForm(data){
            this.FormData = data
            this.appState = 2
        },
        storeCertificate(data){
            this.Certificate = data
            this.appState = 3
        },
        storeScore(data){
            this.Score = data
            this.postData()
        },
        async postData () {
            const thedata = {
                SurveyID: this.SurveyID,
                Email: this.FormData.email,
                Certificate: this.Certificate,
                Result: this.Score,
                Desglose: '',
                IPAddress: this.IP
            }
            const res = await axios.post(window.api+'/SaveData', thedata)
            console.log(res.data)
            if(res.data.d){
                this.IDP = res.data.d
            } else {
                this.IDP = 'Error. Participación no válida.'
            }
        },
        async getIP () {
            const res = await axios.get("https://api.ipify.org");
            this.IP = res.data;
        }
    },
    mounted () {
        this.getIP()
    }
})
app.component('loading-status', LoadingStatus)
app.component('modal-dialog', ModalDialog)
app.component('surveyid', SurveyID)
app.component('form-collect', FormCollect)
app.component('terms-conditions', TermsConditions)
app.component('certificates-list', CertificatesList)
app.component('activity-screen', ActivityScreen)
app.component('participation-id', ParticipationID)
app.use(pinia)

app.mount('#app');



