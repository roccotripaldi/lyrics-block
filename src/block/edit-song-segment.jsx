/*
 * External dependencies
 */
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls } = wp.editor;
const { PanelBody, ToggleControl } = wp.components;
const { __ } = wp.i18n;

class SongSegmentEditor extends Component {
    render() {
        const { attributes, setAttributes } = this.props;
        const { content, showHeading } = attributes;
        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody>
                        <ToggleControl
                            label={ __( 'Show Heading' ) }
                            checked={ showHeading }
                            onChange={ value => setAttributes( { showHeading: value } ) }
                        />
                    </PanelBody>
                </InspectorControls>
                <div className='lyrics-song-segment'>
                    <RichText
                        value={ content }
                        onChange={ value => setAttributes( { content: value } ) }
                        placeholder={ __( 'Type some lyrics…' ) }
                    />
                </div>
            </Fragment>
        );
    }
}

export default SongSegmentEditor;
