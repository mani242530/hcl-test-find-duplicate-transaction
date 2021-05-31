let Home = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1> Home </h1>                
            </section>
            <main>
                <div>
                    Welcome to HCL Test Find Duplicate Transactions 
                </div>            
            </main>
        `
        return view
    }
    , after_render: async () => {
    }

}

export default Home;