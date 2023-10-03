export default {
    template: `
    <div class="flex gap-2 text-sm text-black bg-main w-fit h-fit py-1 px-2 justify-center items-center">
        <box-icon size="sm" color="#000" name="loader-alt" animation='spin'></box-icon>
        <div><slot></slot></div>
    </div>
    `,
    data () {
        return {

        }
    }
}