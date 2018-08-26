const ArrayView = self["web-cell"].ArrayView;

document.addEventListener("DOMContentLoaded", () => {
    const pie = new ArrayView(document.querySelector("#PieChart"));

    pie.render(
        Array(4)
            .fill(0)
            .map((item, index, list) => ({
                percent: ((index + 1) / list.length) * 100
            }))
    );
});
