import React from 'react';

var Post = React.createClass({
  render: function () {
      return(
        <div className="panel panel-default post-body">
          <div className="panel-body">
            {this.props.postBody}
          </div>
        </div>

      );
  }

  });

  export default Post;
