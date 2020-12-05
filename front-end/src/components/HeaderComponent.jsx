import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark ">
                        <div>
                            Student Service App - Coding Test - Fraunhofer IEM Paderborn
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;