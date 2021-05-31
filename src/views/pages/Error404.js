let Error404 = {

    render : async () => {
        let view =  /*html*/`
        <main class="flex-shrink-0">
            <div class="container">
                <h1 class="mt-5">Error</h1>
                <p class="lead">
                    404 Page not found
                </p> 
            </div>           
        </main>
        `
        return view
    }
    , after_render: async () => {
    }
}
export default Error404;