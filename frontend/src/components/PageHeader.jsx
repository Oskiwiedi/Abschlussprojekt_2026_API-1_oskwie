function PageHeader({ title }) {
    return (
        <div className="px-6 py-6 border-b border-white/10">
            <h1 className="text-3xl font-bold text-white">{title}</h1>
        </div>
    )
}

export default PageHeader