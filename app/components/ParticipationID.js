export default {
    props: ['idp'],
    emits: [],
    template: `
        <div class="absolute bottom-2 left-2 right-2 text-center p-1 z-50">
            <div v-if="idp" class="py-1 px-8 bg-main text-black mx-auto w-fit">
                <div class="text-sm">ID de participación:</div>
                <div class="text-xl font-bold">{{idp}}</div>
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