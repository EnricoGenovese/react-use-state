import languages from "../data/languages.js"

export default function DescriptionSection({ id, title, description }) {
    const progLangs = [...languages]

    return (
        <main className="container m-5">
            {progLangs.map((lang) => {
                return <div key={lang.id} >
                    <h4>{lang.title}</h4>
                    <p>{lang.description}</p>
                </div>
            })}
        </main>
    )
}