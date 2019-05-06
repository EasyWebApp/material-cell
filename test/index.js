var { documentReady, $ } = self['web-cell'];

var View = self['dom-renderer'].default;

documentReady.then(function() {
    var drawer = $('cell-drawer')[0];

    $('.mdl-layout__drawer-button')[0].addEventListener(
        'click',
        drawer.open.bind(drawer)
    );

    var pie = $('#PieChart')[0];

    var view = new View(View.getTemplate(pie));

    return Promise.all(
        Array(4)
            .fill(0)
            .map(function(item, index, list) {
                item = view.clone();

                return item
                    .render({
                        percent: ((index + 1) / list.length) * 100
                    })
                    .then(function() {
                        return item.topNodes;
                    });
            })
    ).then(function(list) {
        pie.append.apply(pie, [].concat.apply([], list));
    });
});
