/*
 * External dependencies
 */
const { Component, Fragment } = wp.element;
const { RichText, InspectorControls, PlainText } = wp.editor;
const { PanelBody, ToggleControl, TextControl } = wp.components;
const { __, sprintf } = wp.i18n;

class LyricSectionEditor extends Component {
    render() {
        const { attributes, setAttributes } = this.props;
        const { content, showHeading, type, repeats } = attributes;
        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody>
                        <ToggleControl
                            label={ __( 'Show Section Heading' ) }
                            checked={ showHeading }
                            onChange={ value => setAttributes( { showHeading: value } ) }
                        />
                    </PanelBody>
                    <PanelBody>
                        <TextControl
                            label={ __( 'Section Type' ) }
                            value={ type }
                            onChange={ value => setAttributes( { type: value } ) }
                        />
                    </PanelBody>
                    <PanelBody>
                        <TextControl
                            type='number'
                            label={ __( 'Repeats' ) }
                            value={ repeats }
                            onChange={ value => setAttributes( { repeats: value } ) }
                        />
                    </PanelBody>
                </InspectorControls>
                <div>
                    { showHeading && (
                        <h3 className='lyrics-heading'>
                            <PlainText
                                placeholder={ __( 'Section type...' ) }
                                value={ type }
                                onChange={ value => setAttributes( { type: value } ) }
                            />
                        </h3>
                    ) }
                    { parseInt( repeats ) > 1 && (
                        <p className='lyrics-repeats'>
                            { sprintf( __( 'Repeat %d times' ), repeats ) }
                        </p>
                    ) }
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

export default LyricSectionEditor;
