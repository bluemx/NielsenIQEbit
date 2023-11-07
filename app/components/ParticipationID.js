export default {
    props: ['idp'],
    emits: [],
    template: `
        <div class="absolute bottom-2 left-2 right-2 text-center p-1 z-50">
            <div v-if="idp" class="py-1 px-8 bg-main text-black mx-auto w-fit">
                <div class="max-w-xl py-2">
                    <div class="font-bold my-2 text-xl">¡GRACIAS POR PARTICIPAR!</div>
                    <div>En caso de que obtengas el puntaje más alto de entre todos los participantes de esta semana recibirás por correo electrónico el código del certificado electrónico que seleccionaste.</div>
                </div>
                <div class="w-fit px-8 py-1 mx-auto border-2 border-white">
                    <div class="text-sm">ID de participación:</div>
                    <div class="text-xl font-bold">{{idp}}</div>
                </div>
                <div class="my-2  w-fit py-0.5 px-2 mx-auto"><terms-conditions></terms-conditions></div>
            </div>
            <template v-else>
                <loading-status class="mx-auto">Registrando participación</loading-status>
            </template>
        </div>
    `,
    data () {
        return {
            loading: true
        }
    },
    methods: {
        
    },
    mounted() {
       
    },
}