import PortfolioItem from "./PortfolioItem";
import projects from "./../data/projects";

function Portfolio() {
    return (
        <div className="flex justify-center flex-wrap gap-10 mx-80">
            {projects.map((project) => (
                <PortfolioItem
                    key={project.title}
                    title={project.title}
                    imageUrl={project.imageUrl}
                />
            ))}
        </div>
    );
}

export default Portfolio;
