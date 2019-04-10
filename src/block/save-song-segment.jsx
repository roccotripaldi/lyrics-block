/*
 * External dependencies
 */
const { Component, RawHTML } = wp.element;
const { __, sprintf } = wp.i18n;


class SongSegmentSave extends Component {
    render() {
        const { attributes } = this.props;
        const { content, showHeading, repeats, type } = attributes;
        return (
            <div>
                { showHeading && (
                    <h3 className="lyrics-heading">{ type }</h3>
                ) }
                { parseInt( repeats ) > 1 && (
                  <p className="lyrics-repeats">
                      { sprintf( __( 'Repeat %d times' ), repeats ) }
                  </p>
                ) }
                <RawHTML className="lyrics-content">{ content }</RawHTML>
            </div>
        );
    }
}

export default SongSegmentSave;
