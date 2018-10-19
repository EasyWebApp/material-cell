const { documentReady, $, ArrayView } = self['web-cell'];


documentReady.then(() => {

    const drawer = $('cell-drawer')[0];

    $('.mdl-layout__drawer-button')[0].addEventListener(
        'click',  drawer.open.bind( drawer )
    );

    const pie = new ArrayView( $('#PieChart')[0] );

    pie.render(
        Array(4)
            .fill(0)
            .map((item, index, list) => ({
                percent:  ((index + 1) / list.length) * 100
            }))
    );
});
