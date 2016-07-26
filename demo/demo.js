var app = angular.module('demo', ['ngSanitize', 'facet-search']);

app
  .controller('main', ['filters', '$scope', function(filters, $scope) {
    let $ctrl = this;
    $ctrl.filters = filters;
    $ctrl.selectedFilters = [];
    $ctrl.hoveredOn = '';
    $ctrl.filterHover = (filter) => {
      $ctrl.hoveredOn = filter.name;
    };
    $ctrl.filterClick = (filter) => {
      console.log('from click controller', filter);
    };
    $scope.$on('FACET_CHANGED', (evnt, selectedFilters) => {
      $ctrl.selectedFilters = selectedFilters;
    })
  }])
  .constant('filters', [{
    name: 'Flight1',
    addtionalInfo: '$230',
    selected: false
    }, {
    name: 'Flight2',
    addtionalInfo: '$2332',
    selected: false
    }, {
    name: 'Flight3',
    addtionalInfo: '$340',
    selected: false
    }, {
    name: 'Flight4',
    addtionalInfo: '$2450',
    selected: false
    }, {
    name: 'Flight5',
    addtionalInfo: '$23023',
    selected: false
    }, {
    name: 'Flight6',
    addtionalInfo: '$23012',
    selected: false
    }, {
    name: 'Flight7',
    addtionalInfo: '$2130',
    selected: false
    }, {
    name: 'Flight8',
    addtionalInfo: '$460',
    selected: false
  }]);
