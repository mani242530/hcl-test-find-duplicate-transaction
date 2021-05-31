let Navbar = {
    render: async () => {
        let view =  /*html*/`
            <header>  
                <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div class="container-fluid">
                    <a class="navbar-brand" href="#">HCL</a>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                            <li class="nav-item">
                                <a class="nav-link" href="/#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#/duplicate">Duplicate</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </header>
        `
        return view
    },
    after_render: async () => { }

}

export default Navbar;