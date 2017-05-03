/*
 * Copyright 2017-present Open Networking Laboratory
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 ONOS GUI -- Topo2LinkLabel
 A label positioned at the center point of a link
 usage: new LinkLabel({text, icon}, DOM Element, Link);
 */

(function () {

    angular.module('ovTopo2')
        .factory('Topo2LinkLabel', [
            'Topo2Label', 'Topo2ZoomService',
            function (Label, t2zs) {
                return Label.extend({
                    className: 'topo2-linklabel',
                    maxHeight: 30,
                    minHeight: 20,
                    setPosition: function () {
                        var link = this.options.link;
                        this.set({
                            x: (link.source.x + link.target.x) / 2,
                            y: (link.source.y + link.target.y) / 2
                        });
                    },
                    setScale: function () {
                        this.content.style('transform',
                            'scale(' + t2zs.adjustmentScale(20, 30) + ')');
                    }
                });
            }
        ]);
})();