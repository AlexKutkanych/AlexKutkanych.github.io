
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});

// bind filter button click
$('.filters-button-group').on( 'click', 'span', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'span', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });
});
$grid.isotope({ filter: '.web-designer' });
$grid.isotope({ filter: '.coder' });



$grid.isotope({ filter: '*' });
