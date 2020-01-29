//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using DG.XrmContext;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Linq.Expressions;
using System.Runtime.Serialization;


namespace Entities {
    
    
    [EntityLogicalName("teammembership")]
    [DebuggerDisplay("{DebuggerDisplay,nq}")]
    [DataContract()]
    public partial class TeamMembership : ExtendedEntity<EmptyEnum, EmptyEnum> {
        
        public const string EntityLogicalName = "teammembership";
        
        public const int EntityTypeCode = 23;
        
        public TeamMembership() : 
                base(EntityLogicalName) {
        }
        
        public TeamMembership(Guid Id) : 
                base(EntityLogicalName, Id) {
        }
        
        private string DebuggerDisplay {
            get {
                return GetDebuggerDisplay(null);
            }
        }
        
        [AttributeLogicalName("teammembershipid")]
        public override Guid Id {
            get {
                return base.Id;
            }
            set {
                SetId("teammembershipid", value);
            }
        }
        
        /// <summary>
        /// <para>Unique identifier of the team membership.</para>
        /// </summary>
        [AttributeLogicalName("teammembershipid")]
        public Guid? TeamMembershipId {
            get {
                return GetAttributeValue<Guid?>("teammembershipid");
            }
            set {
                SetId("teammembershipid", value);
            }
        }
        
        [AttributeLogicalName("systemuserid")]
        public Guid? SystemUserId {
            get {
                return GetAttributeValue<Guid?>("systemuserid");
            }
        }
        
        [AttributeLogicalName("teamid")]
        public Guid? TeamId {
            get {
                return GetAttributeValue<Guid?>("teamid");
            }
        }
        
        [AttributeLogicalName("versionnumber")]
        public long? VersionNumber {
            get {
                return GetAttributeValue<long?>("versionnumber");
            }
        }
        
        public static TeamMembership Retrieve(IOrganizationService service, Guid id, params Expression<Func<TeamMembership,object>>[] attrs) {
            return service.Retrieve(id, attrs);
        }
    }
}
