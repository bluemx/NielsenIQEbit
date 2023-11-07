export default {
    template: `
    <dialog ref="dialog" class="min-w-[15rem] p-2 !rounded-none	!ring-0 relative">
        <slot></slot>
    </dialog>
    `,
    data () {
        return {

        }
    },
    methods: {
        openDialog(){
            this.$refs.dialog.showModal()
            this.$refs.dialog.addEventListener('cancel', (event) => {
                event.preventDefault();
            });
        },
        closeDialog(){
            this.$refs.dialog.hide()
        },
    },
    mounted() {
        this.openDialog()
    },
}