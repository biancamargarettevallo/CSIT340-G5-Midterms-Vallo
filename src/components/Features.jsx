import FeatureCard from "./FeatureCard";

function Features() {
    const features = [
        {
            tag: "Free",
            title: "Open source",
            description: "Read the code and use it in any project.",
        },
        {
            tag:"Small",
            title:"Lightweight",
            description:"Import only the components the page uses."
        }, 
        {
            tag:"Simple",
            title: "Easy to learn",
            description: "Every component takes a few plain props."
        }
    ]
    return(
        <main className="grid grid-cols-3 gap-8 px-20">
            {features.map((features) => (
                <FeatureCard tag={features.tag} title={features.title} description={features.description}/>
            )
        )}
      </main>
    )
}

export default Features;