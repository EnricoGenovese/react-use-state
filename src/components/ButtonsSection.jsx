import { useState } from "react"
import languages from "../data/languages"
import DescriptionSection from "./DescriptionSection"

export default function ButtonsSection({ title, id }) {
    const langs = [...languages]
    const [description, setDescritption] = useState(langs[0]) // {id:1 ... .title .description}

    function setNewDescription(index) {
        setDescritption(langs[index])
    }

    return (
        <>
            <section className="container d-flex m-5">
                {langs.map((el, key) => {

                    return <a className={el.id == description.id ? 'btn mx-3 btn-warning' : 'btn btn-primary mx-3'} key={key} onClick={() => { setNewDescription(key) }}> {el.title}</a>

                })
                }
            </section >

            <DescriptionSection lang={description} />
        </>
    )
}