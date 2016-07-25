var app = angular.module('demo', ['ngSanitize', 'facet-search']);

app
  .controller('main', ['filters', '$scope', function(filters, $scope) {
    let $ctrl = this;
    $ctrl.filters = filters;
    $ctrl.filterHover = (filter) => {
      console.log('from hover', filter);
    };
    $ctrl.filterClick = (filter) => {
      console.log('from click controller', filter);
    };
    $scope.$on('FACET_CHANGED', (evnt, filter) => {
      console.log('selected filter', filter);
    })
  }])
  .constant('filters', [{
    name: 'Flight1',
    addtionalInfo: '$230',
    selected: false
    }, {
    name: 'Flight2',
    addtionalInfo: '$230',
    selected: false
    }, {
    name: 'Flight3',
    addtionalInfo: '$230',
    selected: false
    }, {
    name: 'Flight4',
    addtionalInfo: '$230',
    selected: false
    }, {
    name: 'Flight5',
    addtionalInfo: '$230',
    selected: false
    }, {
    name: 'Flight6',
    addtionalInfo: '$230',
    selected: false
    }, {
    name: 'Flight7',
    addtionalInfo: '$230',
    selected: false
    }, {
    name: 'Flight8',
    addtionalInfo: '$230',
    selected: false
  }]);
