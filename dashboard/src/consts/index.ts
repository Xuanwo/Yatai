import { ResourceType } from '@/schemas/resource'
import type { IconBaseProps } from 'react-icons/lib'
import { GrOrganization, GrServerCluster, GrDeploy, GrUser } from 'react-icons/gr'
import { AiOutlineCodeSandbox } from 'react-icons/ai'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BiRevision } from 'react-icons/bi'
import { GoPackage } from 'react-icons/go'

export const headerHeight = 55
export const sidebarExpandedWidth = 220
export const sidebarFoldedWidth = 68
export const textVariant = 'smallPlus'
export const timeFormat = 'YYYY-MM-DD HH:mm:ss'

export const resourceIconMapping: Record<ResourceType, React.ComponentType<IconBaseProps>> = {
    user: GrUser,
    user_group: HiOutlineUserGroup,
    organization: GrOrganization,
    cluster: GrServerCluster,
    bento: GoPackage,
    bento_version: AiOutlineCodeSandbox,
    deployment: GrDeploy,
    deployment_snapshot: BiRevision,
}