import { Suspense } from 'react'
import { Await, defer, Form, json, redirect, useLoaderData, useNavigate, useNavigation } from 'react-router-dom'

export default function ReactRouter({ method }) {
    const { pokemon } = useLoaderData()
    const navigate = useNavigate()
    const navigation = useNavigation()

    console.log('navigation:', navigation.state)

    const isSubmitting = navigation.state === 'submitting'

    function cancelHandler() {
        navigate('/')
    }

    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={pokemon}>
                {(loadedPokemon) => {
                    return (
                        <Form method="POST">
                            <h2>Pokemon form! (react-router-dom)</h2>
                            <p>
                                Using <a href="https://pokeapi.co/">https://pokeapi.co/</a>
                            </p>

                            {loadedPokemon && loadedPokemon.errors && (
                                <ul>
                                    {Object.values(data.errors).map((err) => (
                                        <li key={err}>{err}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="control">
                                <div className="control no-margin">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        id="title"
                                        type="text"
                                        name="title"
                                        required
                                        defaultValue={loadedPokemon ? loadedPokemon.name : ''}
                                    />
                                </div>
                            </div>

                            <img
                                src={loadedPokemon ? loadedPokemon.sprites.front_default : ''}
                                alt={loadedPokemon ? loadedPokemon.name : ''}
                            />

                            <div className="control no-margin">
                                <label htmlFor="image">Image</label>
                                <input
                                    id="image"
                                    type="url"
                                    name="image"
                                    required
                                    defaultValue={loadedPokemon ? loadedPokemon.sprites.front_default : ''}
                                />
                            </div>

                            <div className="control no-margin">
                                <label htmlFor="date">Date</label>
                                <input
                                    id="date"
                                    type="date"
                                    name="date"
                                    required
                                    defaultValue={loadedPokemon ? '1996-02-27' : ''}
                                />
                            </div>

                            <p className="form-actions">
                                <button
                                    type="button"
                                    onClick={cancelHandler}
                                    disabled={isSubmitting}
                                    className="button button-flat">
                                    Cancel
                                </button>
                                <button disabled={isSubmitting} className="button">
                                    {isSubmitting ? 'Submitting..' : 'Save'}
                                </button>
                            </p>
                        </Form>
                    )
                }}
            </Await>
        </Suspense>
    )
}

export async function action({ request, params }) {
    const method = request.method
    const data = await request.formData()

    console.log('data:', data)

    async function justWait() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 5000)
        })
    }
    await justWait()

    return redirect('/')
}

async function loadPokemon() {
    const randomId = Math.floor(Math.random() * 1000 + 1)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}/`)

    if (!response.ok) {
        throw json(
            { message: 'Could not fetch events.' },
            {
                status: 500,
            }
        )
    } else {
        const pokemon = await response.json()
        return pokemon
    }
}

export async function loader({ request, params }) {
    return defer({
        pokemon: loadPokemon(),
        //events: loadEvents(),
    })
}
