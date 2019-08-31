import React  from 'react';

const RepoItem = ({repo}) => {
   console.log("item", repo)
        return (
           <div className="repos_card">
              <h3><a href=""> {repo.name}</a></h3>
           </div>
        );
    
}

export default RepoItem;