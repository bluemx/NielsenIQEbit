export default {
    props: ['list'],
    emits: ['ready'],
    template: `
        <div class="flex gap-2 flex-wrap justify-center">
            <template v-for="(item, index) in list">

                    <div class="bg-white text-black p-5 text-center w-40 md:w-60">
                        <img :src="'app/certificates/'+item.image" class="w-full">
                        <div class="grid grid-cols-2 gap-2">
                            <div class="text-left">
                                <div class="text-sm">{{item.name}}</div>
                                <div class="text-xl font-bold ">{{item.value}}</div>
                            </div>
                            <button @click="opencard(item)" class="bg-white border-[1px] border-black flex gap-2 py-1 px-4 ml-auto justify-center items-center hover:bg-main">
                                <box-icon name='right-arrow-alt'></box-icon>
                            </button>
                        </div>
                    </div>
            </template>
            <modal-dialog v-if="current">
                <div class="flex justify-between items-center gap-2">
                    <div class="font-bold">{{current.name}}</div>
                    <div class="font-bold ">{{current.value}}</div>
                    <button @click="current=null" class="bg-white border-[1px] border-black flex gap-2 py-1 px-4 ml-auto justify-center items-center hover:bg-main">
                        <box-icon name='x'></box-icon>
                    </button>
                </div>
                <div class="max-w-md">
                    <div class="grid grid-cols-3 gap-2 justify-center items-center">
                        <div><img :src="'app/certificates/'+current.image" class="w-full"></div>
                        <div class="col-span-2 p-2 text-sm" >
                            <div v-html="current.desc" class="my-2"></div>
                            
                            <button @click="chooseitem(current)" class="mt-5 bg-white border-[1px] border-black flex gap-2 py-1 px-4 mx-auto justify-center items-center hover:bg-main font-bold text-lg">
                                Elegir certificado
                            </button>
                        </div>
                    </div>
                </div>

            </modal-dialog>
        </div>
    `,
    data () {
        return {
            current: null 
        }
    },
    methods: {
        opencard (item) {
            this.current = item
        },
        chooseitem (item) {
            this.$emit('ready', item.name)
        }
    },
    mounted() {

    },
}