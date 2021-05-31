let Bottombar = {
    render: async () => {
        let view =  /*html*/`
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                Copyright © 2021 HCL Technologies Limited.
                </p>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Bottombar;