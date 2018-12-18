/*
 * External dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks, InspectorControls, PlainText } = wp.editor;
const { PanelBody, TextControl } = wp.components;
const { __ } = wp.i18n;

class LyricBlockEditor extends Component {
    render() {
        const { className, attributes, setAttributes, resetFocus } = this.props;
        const { artist, title } = attributes;
        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody>
                        <TextControl
                            label={ __( 'Song Title' ) }
                            value={ title }
                            onChange={ value => setAttributes( { title: value } ) }
                        />
                    </PanelBody>
                    <PanelBody>
                        <TextControl
                            label={ __( 'Artist' ) }
                            value={ artist }
                            onChange={ value => setAttributes( { artist: value } ) }
                        />
                    </PanelBody>
                </InspectorControls>
                <div className={ className }>
                    <h2 className='lyrics-title'>
                        <PlainText
                            placeholder={ __( 'Song title...' ) }
                            value={ title }
                            onChange={ value => setAttributes( { title: value } ) }
                        />
                    </h2>
                    <p className='lyrics-artist'>
                        <PlainText
                            value={ artist }
                            onChange={ value => setAttributes( { artist: value } ) }
                            placeholder={ __( 'Artist…' ) }
                        />
                    </p>
                </div>
                <InnerBlocks />
            </Fragment>
        );
    }
}

export default LyricBlockEditor;
