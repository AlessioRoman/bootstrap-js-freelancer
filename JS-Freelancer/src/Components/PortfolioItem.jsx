function PortfolioItem({ title, imageUrl }) {
    return (
        <div className="text-purpleText bg-purpleBgAlt w-80 rounded-lg px-6 py-4 flex flex-wrap flex-col items-start justify-between shadow-lg border border-grey border-opacity-80">
            <div className="min-w-80">
                <img src={imageUrl} alt="project" className="rounded-md" />
                <h1 className="text-white text-2xl font-semibold mb-4 text-center">
                    {title}
                </h1>
                <div className="flex justify-center gap-3 items-center">
                    <button className="border shadow-xl px-2 py-1 rounded-lg bg-purpleText text-purpleBgAlt text-center font-semibold">
                        Preview
                    </button>
                    <button className="border shadow-xl px-2 py-1 rounded-lg bg-purpleText text-purpleBgAlt text-center font-semibold">
                        Website
                    </button>
                </div>
            </div>
        </div>
    );
}
export default PortfolioItem;
