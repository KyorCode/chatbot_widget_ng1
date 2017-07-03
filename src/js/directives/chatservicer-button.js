(function (ng) {
    'use strict';

    ng
        .module('akit.component.chatservicerButton')
        .directive('chatservicerButton', [

            function () {

                return {
                    restrict: 'AE',
                    replace: true,
                    templateUrl: '/assets/chatservicer-button/views/directives/chatservicer-button.htm',
                    controller: 'akit.component.chatservicerButton.chatservicerButtonController',
                    controllerAs: 'chatservicer',
                    link: function ($scope, element, attrs, ctrl) {
                        var buttonTextAvailable = 'Chat met een medewerker';
                        var buttonTextUnavailable = 'Hulp nodig bij het invullen?';

                        function updateChatButton() {
                            if (ctrl.available) {
                                if (ctrl.popupOpen) ctrl.popupOpen = false;
                                ctrl.buttonText = buttonTextAvailable;
                            } else {
                                ctrl.buttonText = buttonTextUnavailable;
                            }
                        }

                        function initialize() {
                            updateChatButton();

                            $scope.$watch('chatservicer.available', function onAvailabiltyChange(newValue, oldValue) {
                                if (newValue !== oldValue) {
                                    updateChatButton();
                                }
                            });
                        }

                        initialize();
                    }
                };

            }
        ]);

})(window.angular);
