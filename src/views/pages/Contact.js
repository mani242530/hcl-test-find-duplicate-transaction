let Contact = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1> Contact </h1>
            </section>
            <main>
                <address>
                    Mobile number: +32 (0) 46518 1948 / +44 (0) 74595 05564 </ br>
                    Email: manivannan.b2530@gmail.com </ br>
                    Address: Rue du 4 Août 68, 1300 Wavre, Belgium </ br>
                </address>
            </main>
        `
        return view
    },
    after_render: async () => {}
        
}

export default Contact;