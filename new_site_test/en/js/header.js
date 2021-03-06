document.write('\
                <div class="col">\
                \
                    <nav class="navbar navbar-expand-md fixed-top navbar-fixed-width navbar-light bg-light justify-content-end py-0 pl-0">\
                        <div>\
                            <a class="navbar-brand py-0" href="home.html">\
                                <img src="../images/logo_long.png" width="260" height="85" alt="Chin Ching Group">\
                            </a>\
                        </div>\
                        \
                        <div class="navbar-nav ml-auto">\
                            <li class="nav-item dropdown">\
                                <!-- Icon ref https://www.deviantart.com/vathanx -->\
                                <!-- Should change to commercial license Jan 19\' -->\
                                <button class="btn" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="margin-right: 10px">\
                                    <div class="row">\
                                        <img src="../icons/icon_en.png" class="my-auto" width="20" height="20" alt="EN" style="margin-right: 5px">\
                                  \
                                        <span class="d-none d-md-block">English</span>\
                                    </div>\
                                </button>\
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">\
                                    <a class="dropdown-item" href="#" id="tw">\
                                        <img src="../icons/icon_tw.png" width="20" height="20" alt="TW">\
                                        正體中文\
                                    </a>\
                                    <a class="dropdown-item disabled" href="#" id="jp">\
                                        <img src="../icons/icon_jp.png" width="20" height="20" alt="JP">\
                                        日本語\
                                    </a>\
                                    <a class="dropdown-item disabled" href="#" id="cn">\
                                        <img src="../icons/icon_cn.png" width="20" height="20" alt="CN">\
                                        簡體中文\
                                    </a>\
                                    <!--<div class="dropdown-divider"></div>\
                                    <a class="dropdown-item disabled" href="#">\
                                        Something else here\
                                    </a>-->\
                                </div>  \
                            </li>\
                        </div>\
\
                        <div>\
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">\
                                <span class="navbar-toggler-icon"></span>\
                            </button>\
                        </div>\
\
                        <div class="collapse navbar-collapse flex-grow-0" id="collapsibleNavbar">\
                            <div class="navbar-nav text-right">\
                                <a class="nav-item nav-link" href="home.html">Home</a>\
                                <a class="nav-item nav-link" href="about.html">About</a>\
                                <a class="nav-item nav-link" href="products.html">Products</a>\
                                <a class="nav-item nav-link" href="services.html">Service</a>\
                                <a class="nav-item nav-link disabled d-none" href="#" tabindex="-1" aria-disabled="true">Disabled</a>\
                                <!--<a class="nav-item nav-link hidden" href="#">Padding</a>-->\
                            </div>\
                        </div>\
                    </nav>\
\
                </div>\n');
