export default {
    emits: ['ready'],
    template: `
        <div class="bg-white text-black p-5 text-center w-fit mx-auto">
            <form @submit.prevent="handleSubmit" class="flex flex-col gap-2">
                <label>Ingresa el correo electrónico con el que contestaste la encuesta anterior.</label>
                <input class="border-[1px] border-black p-2" v-model="form.email" required type="email" placeholder="Correo electrónico" />
                <button class="bg-main p-2" type="submit">Ingresar</button>
                <terms-conditions></terms-conditions>
            </form>
        </div>
    `,
    data () {
        return {
            error: false,
            form: {
                email: ''
            }
        }
    },
    methods: {
        handleSubmit (e) {
            e.preventDefault();
            this.$emit('ready', this.form)   
        }
    },
    mounted() {

    },
}