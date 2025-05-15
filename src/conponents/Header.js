import { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <header>
                <div className='container'>
                    <nav>
                     <li>
                      Joker Xue
                     </li>
                     <ul>
                        <li>
                         home
                        </li>
                        <li>
                         about
                        </li>
                        <li>
                         contect
                        </li>
                     </ul>
                    </nav>
                </div>
            </header>
        ) 
    }
}

export default Header;