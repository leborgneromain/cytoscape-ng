import { Component, OnChanges, ElementRef, Input } from '@angular/core';
declare var cytoscape: any;

@Component({
    selector: 'cytoscape-ng',
    template: '<div id="cy"></div>',
    styles: [`#cy {
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }`]
})
export class CytoscapeNgLibComponent implements OnChanges {

    private _elements: any
    private _style: any
    private _layout: any
    private _zoom: any
    private _cy: any

    public constructor(private _el: ElementRef) {

        this._layout = this._layout || {
            name: 'grid',
            directed: true,
            padding: 0
        };

        this._zoom = this._zoom || {
            min: 0.1,
            max: 1.5
        };

        this._style = this._style || cytoscape.stylesheet()
            .selector('node')
            .css({
                'content': 'data(name)',
                'shape': getShape,
                'height': getHeight,
                'width': getWidth,
                'text-valign': 'bottom',
                'background-color': getColor,
                'color': getColor,
                'background-opacity': 0.05
            })
            .selector(':selected')
            .css({
                'background-color': "gray",
                'border-color': "gray",
                'border-width': 1.5,
                'color': "gray",
                'background-opacity': 0.4,

            })
            .selector('edge')
            .css({
                'label': getLabel,
                'color': '#E0E0E0',
                'curve-style': 'bezier',
                'opacity': 1,
                'width': 3,
                'target-arrow-shape': 'triangle',
                'line-color': "#E0E0E0",
                'source-arrow-color': "#E0E0E0",
                'target-arrow-color': "#E0E0E0"
            })
            .selector('node[icon]')
            .css({
                'background-image': renderImage

            });

        function renderImage(ele) {
            var icon = ele.data("icon")
            var color = getColor(ele)
            var svg = `<svg xmlns="http://www.w3.org/2000/svg"  width="80" height="80" fill="${color}">
                <text dominant-baseline="middle" text-anchor="middle" x="50%" y="50" style="font-size:70; font-family: FontAwesome">&#x${icon};</text>
            </svg>`
            return 'data:image/svg+xml;base64,' + btoa(svg)
        }
        function getShape(ele) {
            return ele.data("shape") || "ellipse"
        }
        function getColor(ele) {
            return ele.data("color") || "#337AB7"
        }
        function getWidth(ele) {
            return ele.data("width") || "100%"
        }
        function getHeight(ele) {
            return ele.data("height") || "100%"
        }
        function getLabel(ele) {
            return ele.data("label") || ""
        }
    }

    public ngOnChanges(): any {
        this.render();
    }

    public render() {
        if (!this.cy) {
            this.cy = cytoscape({
                container: this.el.nativeElement,
                layout: this.layout,
                minZoom: this.zoom.min,
                maxZoom: this.zoom.max,
                style: this.style,
                elements: this.elements,
            });
        } else {

            // Have to stop existing layout instance.
            let oldlayout = this.cy.LayoutInstance;
            if (oldlayout) {
                oldlayout.stop()
            }

            this.cy.nodes().remove()
            let nodes = this.cy.add(this.elements)
            this.cy.minZoom(this.zoom.min)
            this.cy.maxZoom(this.zoom.max)

            // set the current graph elem collection layout to current instance value.
            let layout = nodes.layout(this.layout)

            // we need to rerun the layout again
            layout.run()
        }
    }


    get elements(): any {
        return this._elements
    }

    @Input()
    set elements(value: any) {
        this._elements = value
    }

    get style(): any {
        return this._style
    }

    @Input()
    set style(value: any) {
        this._style = value
    }

    get layout(): any {
        return this._layout
    }

    @Input()
    set layout(value: any) {
        this._layout = value
    }

    get zoom(): any {
        return this._zoom
    }

    @Input()
    set zoom(value: any) {
        this._zoom = value
    }

    get cy(): any {
        return this._cy
    }

    @Input()
    set cy(value: any) {
        this._cy = value
    }

    get el(): ElementRef {
        return this._el
    }

    @Input()
    set el(value: ElementRef) {
        this._el = value
    }
}
