export default {
    emits: ['ready'],
    template: `
        <div @click="dialog=true" class="cursor-pointer text-sm ">
            Términos y condiciones
        </div>
        <modal-dialog v-if="dialog" class="w-fit h-fit max-w-3xl  bg-white relative">
            <div class="absolute top-1 right-1 cursor-pointer" @click="dialog=false">
                <box-icon size="lg" name='x' color="#08f203"></box-icon>
            </div>
            <div class=" m-14 overflow-scroll">
                <div class="font-bold text-xl mb-10">Términos y Condiciones</div>
                <div class="text-left flex flex-col gap-4">
                    <p>+Para obtener al ganador de la semanal se considera a aquel que haya obtenido la puntuación más alta de entre todas las personas que hayan participado entre el día Lunes y el día Domingo de la misma semana.</p>
                    <p>+En caso de presentarse un empate en el total de puntos obtenidos en el juego, el criterio de desempate a utilizar será la persona que haya participado primero en el juego.</p>
                    <p>+El código del certificado electrónico será enviado al ganador por correo electrónico entre el día lunes y el día miércoles de la semana posterior a su participación.</p>
                    <p>+El ganador deberá verificar su bandeja de entrada y su carpeta de spam.</p>
                    <p>+Para cualquier duda relacionada con la participación favor de escribir a: <a href="mailto:nielseniq@bluegames.mx" class="bg-main text-dark p-1">nielseniq@bluegames.mx</a></p>
                </div>
            </div>
        </modal-dialog>

    `,
    data () {
        return {
            dialog: false
        }
    },
    methods: {
    },
    mounted() {

    },
}