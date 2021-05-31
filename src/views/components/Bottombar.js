let Bottombar = {
    render: async () => {
        let view =  /*html*/`
        <footer class="footer mt-auto py-3 bg-light">
            <div class="container content has-text-centered">
                <span class="text-muted">
                  Copyright © 2021 HCL Technologies Limited.
                </span>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Bottombar;