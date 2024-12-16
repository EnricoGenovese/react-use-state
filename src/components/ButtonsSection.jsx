import { useState } from "react"
import languages from "../data/languages"
import DescriptionSection from "./DescriptionSection"

export default function ButtonsSection({ title, id }) {
    const langs = [...languages]
    const { description, setDescritption } = useState(DescriptionSection[0])
    return (
        <section className="container d-flex m-5">
            {langs.map((el, id) => {

                return <a className="btn btn-primary mx-3" key={id}>{el.title}</a>

            })
            }
        </section>
    )
}