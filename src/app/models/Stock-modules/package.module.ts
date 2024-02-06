export interface PackageModel{
  id: number,
  trackingNumber: string,
  command: string,
  packageState: string,
  exportDate: string,
  rollbackDate: string,
  constructingDate: string,
  packagingDate: string
}