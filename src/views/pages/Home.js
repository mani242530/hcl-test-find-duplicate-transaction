let Home = {
    render : async () => {
        let view =  /*html*/`
            <main class="flex-shrink-0">
                <div class="container">
                    <h1 class="mt-5">Home</h1>
                    <p class="lead">
                        Welcome to HCL Test Find Duplicate Transactions 
                    </p> 
                </div>           
            </main>
        `
        return view
    }
    , after_render: async () => {
    }

}

export default Home;