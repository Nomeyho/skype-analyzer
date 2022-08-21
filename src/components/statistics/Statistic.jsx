const Statistic = ({ title, value }) => (
    <div className="w-fit m-4 p-8 rounded-lg bg-gray-100">
        <h2 className="text-normal tracking-tight text-gray-500">
            { title }
        </h2>
        <h4 className="text-4xl tracking-tight font-bold text-gray-800">
            { value }
        </h4>
    </div>
);

export default Statistic;
