import React, { useState } from 'react'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'

const Navbar = () => {
    const total = 25000
    //const token = false
    //const token = true

    //manejo login y logout con useState (encontré esto investigando las posibilidades y me gustó)
    const [token, setToken] = useState(false)
    const handleLogin = () => {
        setToken(true)
    }
    const handleLogout = () => {
        setToken(false)
    }

    return (
        <>
            <nav className="d-flex justify-content-between align-items-center p-3 text-white">
                <div className="d-flex align-items-center gap-3">
                    {/* Título */}
                    <h3>Pizzería Mamma Mía!</h3>

                    {/* Botones visibles solo en escritorio */}
                    <div className="d-none d-md-flex align-items-center gap-2">
                        <Button variant='outline-light'>🍕Home</Button>
                        {token ? (
                            <>
                                <Button variant="outline-light">🔓Profile</Button>
                                <Button variant="outline-light" onClick={handleLogout}>🔒Logout</Button>
                            </>
                        ) : (
                            <>
                                <Button variant="outline-light" onClick={handleLogin}>🔐Login</Button>
                                <Button variant="outline-light">🔐Register</Button>
                            </>
                        )}
                    </div>
                </div>

                {/* Dropdown para tabletas y móviles */}
                <div className="d-block d-md-none ml-auto">
                    <DropdownButton id="dropdown-basic-button" title="Menú" variant='outline-light'>
                        <Dropdown.Item href="#/home">🍕Home</Dropdown.Item>
                        <Dropdown.Divider />
                        {token ? (
                            <>
                                <Dropdown.Item href="#/profile">🔓Profile</Dropdown.Item>
                                <Dropdown.Item onClick={handleLogout} href="#/logout">🔒Logout</Dropdown.Item>
                            </>
                        ) : (
                            <>
                                <Dropdown.Item onClick={handleLogin} href="#/login">🔐Login</Dropdown.Item>
                                <Dropdown.Item href="#/register">🔐Register</Dropdown.Item>
                            </>
                        )}
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/cart">
                            🛒Total: ${total.toLocaleString()}
                        </Dropdown.Item>
                    </DropdownButton>
                </div>

                {/* Total del carrito visible solo en móvil y tablet */}
                <div className="d-none d-md-block">
                    <Button variant='outline-info'>
                        🛒Total: ${total.toLocaleString()}
                    </Button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
