//
// oracle 模板
//
// @params
// :encode  SHELL编码
// :conn    数据库连接字符串
// :sql     执行SQL语句
// :db      数据库名
// :table   表名

module.exports = (arg1, arg2, arg3, arg4, arg5, arg6) => ({
    show_databases: {
      _: 'yv66vgAAADMBLQoAQgB8BwB9CgACAH4KAAIAfwgAgAkAWwCBCACCCQBbAIMIAIQJAFsAhQcAhggAhwoACwCICACJCACKCACLCACMCACNCwCOAI8LAJAAkQsAjgCRBwCSCgAWAHwLAJAAkwoAFgCUCgAWAJUKAFsAlgoAWwCXCgALAJgKAFsAmQoACwCVCgACAJoKAJsAnAcAnQgAngoAIgCVCACfCgAnAKAHAKEKACcAogoAJwCjCgCkAKUKACcApggApwgAqAoAJwCpBwCqCgAnAKsKAC8ArAoAJwCtCgAnAK4KABYArwgAsAoALwCxCACyCgAvALMIALQKALUAtggAtwoAJwC4CAC5CgBAALoIALsHALwKAEAAvQcAvgoAvwDACgBCAMEIAHEHAMIIAMMKAEAAxAoAxQDGCADHCgAnAMgIAMkIAMoKACcAywoAJwDMCgDNAM4LAM8A0AsA0QDSCwDTANQLANUA1gsA1QDXCwDTANgLANMA2QgA2ggA2woAWwDcBwDdAQAHZW5jb2RlcgEAEkxqYXZhL2xhbmcvU3RyaW5nOwEAAmNzAQAMcmFuZG9tUHJlZml4AQAGPGluaXQ+AQADKClWAQAEQ29kZQEABmVxdWFscwEAFShMamF2YS9sYW5nL09iamVjdDspWgEADVN0YWNrTWFwVGFibGUHAN0HAL4HAH0HAN4HAN8HAIYHAKEHAJ0BAAJFQwEASihMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKRXhjZXB0aW9ucwEABmRlY29kZQcAqgEACmV4ZWN1dGVTUUwBAG8oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7WilMamF2YS9sYW5nL1N0cmluZzsHAOAHAOEHAOIHAOMHAOQBAA1zaG93RGF0YWJhc2VzAQA4KExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsMAGAAYQEAHWphdmF4L3NlcnZsZXQvanNwL1BhZ2VDb250ZXh0DADlAOYMAOcA6AEAFGFudHN3b3JkcmFuZG9tUHJlZml4DABfAF0BAAZiYXNlNjQMAFwAXQEAD2FudHN3b3JkQ2hhcnNldAwAXgBdAQAWamF2YS9sYW5nL1N0cmluZ0J1ZmZlcgEAAAwAYADpAQADLT58AQADfDwtAQARYW50c3dvcmRhcmdlbmNvZGUBAA9hbnRzd29yZGFyZ2Nvbm4BAAl0ZXh0L2h0bWwHAN8MAOoA6QcA3gwA6wDpAQAXamF2YS9sYW5nL1N0cmluZ0J1aWxkZXIMAOwA7QwA7gDvDADwAPEMAHEAbwwAbgBvDADuAPIMAHoAewwA8wD0BwD1DAD2AOkBABNqYXZhL2xhbmcvRXhjZXB0aW9uAQAJRVJST1I6Ly8gAQADaGV4DABjAGQBABBqYXZhL2xhbmcvU3RyaW5nDAD3APgMAGAA+QcA+gwA+wD8DAD9AP4BAARudWxsAQAQMDEyMzQ1Njc4OUFCQ0RFRgwA/wDxAQAdamF2YS9pby9CeXRlQXJyYXlPdXRwdXRTdHJlYW0MAQABAQwAYAECDAEDAQQMAQUBBgwA7gEHAQABLAwBCAECAQAFVVRGLTgMAPAA7QEADGphdmEudmVyc2lvbgcBCQwBCgDtAQADMS45DAELAPwBABBqYXZhLnV0aWwuQmFzZTY0DAEMAQ0BAApnZXREZWNvZGVyAQAPamF2YS9sYW5nL0NsYXNzDAEOAQ8BABBqYXZhL2xhbmcvT2JqZWN0BwEQDAERARIMARMBFAEAAltCAQAWc3VuLm1pc2MuQkFTRTY0RGVjb2RlcgwBFQEWBwEXDAEYARkBAAxkZWNvZGVCdWZmZXIMARoA8QEAAg0KAQABCgwBGwEcDAEdAR4HAR8MASABIQcA4QwBIgEjBwDiDAEkASUHAOMMASYBJwcA5AwBKAEBDAEpAP4MASoBKwwBLAD+AQApU0VMRUNUIFVTRVJOQU1FIEZST00gQUxMX1VTRVJTIE9SREVSIEJZIDEBAAEJDABzAHQBAA5TaG93X2RhdGFiYXNlcwEAHGphdmF4L3NlcnZsZXQvU2VydmxldFJlcXVlc3QBAB1qYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXNwb25zZQEAE1tMamF2YS9sYW5nL1N0cmluZzsBABNqYXZhL3NxbC9Db25uZWN0aW9uAQASamF2YS9zcWwvU3RhdGVtZW50AQASamF2YS9zcWwvUmVzdWx0U2V0AQAaamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGEBAApnZXRSZXF1ZXN0AQAgKClMamF2YXgvc2VydmxldC9TZXJ2bGV0UmVxdWVzdDsBAAtnZXRSZXNwb25zZQEAISgpTGphdmF4L3NlcnZsZXQvU2VydmxldFJlc3BvbnNlOwEAFShMamF2YS9sYW5nL1N0cmluZzspVgEADnNldENvbnRlbnRUeXBlAQAUc2V0Q2hhcmFjdGVyRW5jb2RpbmcBAAxnZXRQYXJhbWV0ZXIBACYoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEABmFwcGVuZAEALShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWlsZGVyOwEACHRvU3RyaW5nAQAUKClMamF2YS9sYW5nL1N0cmluZzsBACwoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVmZmVyOwEABmdldE91dAEAHygpTGphdmF4L3NlcnZsZXQvanNwL0pzcFdyaXRlcjsBABtqYXZheC9zZXJ2bGV0L2pzcC9Kc3BXcml0ZXIBAAVwcmludAEACGdldEJ5dGVzAQAEKClbQgEAFyhbQkxqYXZhL2xhbmcvU3RyaW5nOylWAQARamF2YS9sYW5nL0ludGVnZXIBAAhwYXJzZUludAEAFShMamF2YS9sYW5nL1N0cmluZzspSQEACXN1YnN0cmluZwEAFShJKUxqYXZhL2xhbmcvU3RyaW5nOwEAC3RvVXBwZXJDYXNlAQAGbGVuZ3RoAQADKClJAQAEKEkpVgEABmNoYXJBdAEABChJKUMBAAdpbmRleE9mAQAEKEkpSQEAHChJKUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAV3cml0ZQEAEGphdmEvbGFuZy9TeXN0ZW0BAAtnZXRQcm9wZXJ0eQEACWNvbXBhcmVUbwEAB2Zvck5hbWUBACUoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvQ2xhc3M7AQAJZ2V0TWV0aG9kAQBAKExqYXZhL2xhbmcvU3RyaW5nO1tMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kOwEAGGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZAEABmludm9rZQEAOShMamF2YS9sYW5nL09iamVjdDtbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEACGdldENsYXNzAQATKClMamF2YS9sYW5nL0NsYXNzOwEAFmdldERlY2xhcmVkQ29uc3RydWN0b3IBADMoW0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9Db25zdHJ1Y3RvcjsBAB1qYXZhL2xhbmcvcmVmbGVjdC9Db25zdHJ1Y3RvcgEAC25ld0luc3RhbmNlAQAnKFtMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAEdHJpbQEAB3JlcGxhY2UBAEQoTGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7TGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7KUxqYXZhL2xhbmcvU3RyaW5nOwEABXNwbGl0AQAnKExqYXZhL2xhbmcvU3RyaW5nOylbTGphdmEvbGFuZy9TdHJpbmc7AQAWamF2YS9zcWwvRHJpdmVyTWFuYWdlcgEADWdldENvbm5lY3Rpb24BAE0oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9Db25uZWN0aW9uOwEAD2NyZWF0ZVN0YXRlbWVudAEAFigpTGphdmEvc3FsL1N0YXRlbWVudDsBAAxleGVjdXRlUXVlcnkBACgoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9SZXN1bHRTZXQ7AQALZ2V0TWV0YURhdGEBAB4oKUxqYXZhL3NxbC9SZXN1bHRTZXRNZXRhRGF0YTsBAA5nZXRDb2x1bW5Db3VudAEADWdldENvbHVtbk5hbWUBAARuZXh0AQADKClaAQAJZ2V0U3RyaW5nACEAWwBCAAAAAwABAFwAXQAAAAEAXgBdAAAAAQBfAF0AAAAGAAEAYABhAAEAYgAAABEAAQABAAAABSq3AAGxAAAAAAABAGMAZAABAGIAAAFvAAUADQAAAScrwAACTSy2AANOLLYABDoEKhIFtQAGKhIHtQAIKhIJtQAKuwALWRIMtwANOgW7AAtZEgy3AA06BhIOOgcSDzoIEhA6CRIROgoZBBISuQATAgAtKrQACrkAFAIAGQQqtAAKuQAVAgAqKrsAFlm3ABctGQm5ABgCALYAGRIMtgAZtgAaKrQACCq0AAq2ABsqtAAIKrQACrYAHDoLKiq7ABZZtwAXLRkKuQAYAgC2ABkSDLYAGbYAGiq0AAgqtAAKtgAbKrQACCq0AAq2ABw6DBkFGQe2AB1XGQYqGQsZDLYAHrYAHVcZBRkGtgAftgAdVxkFGQi2AB1XLLYAIBkFtgAftgAhpwAiOgsZBrsAFlm3ABcSI7YAGRkLtgAktgAZtgAatgAdVwSsAAEASAEDAQYAIgABAGUAAAAuAAL/AQYACwcAZgcAZwcAaAcAaQcAagcAawcAawcAbAcAbAcAbAcAbAABBwBtHgAAAG4AbwACAGIAAAA0AAQABAAAAB4sEiW2ACaaAAksEiWmAAUrsLsAJ1krtgAoLbcAKbAAAAABAGUAAAAEAAIPAQBwAAAABAABACIAAABxAG8AAgBiAAAB7QAGAAkAAAGCAzYEKrQABrgAKjYEKxUEtgArTKcACDoFAzYELBIltgAmmgAJLBIlpgCfKxIspQAMKxIstgAmmQAGEgywEi06BSu2AC5MuwAvWSu2ADAFbLcAMToGEgw6BwM2CBUIK7YAMKIAXbsAFlm3ABcZB7YAGRkFKxUItgAytgAzB3gZBSsVCARgtgAytgAzgLYANBI1tgAZtgAaOgcZBhkFKxUItgAytgAzB3gZBSsVCARgtgAytgAzgLYANoQIAqf/oBkGEje2ADiwLBIHtgAmmgAJLBIHpgCuAToFEjm4ADo6BhkGEju2ADybAEwSPbgAPjoHGQcSPwO9AEC2AEEZBwO9AEK2AEM6CBkItgBEEkUEvQBAWQMTACdTtgBBGQgEvQBCWQMrU7YAQ8AARsAARjoFpwBFEke4AD46BxkHA70AQLYASAO9AEK2AEk6CBkItgBEEkoEvQBAWQMTACdTtgBBGQgEvQBCWQMrU7YAQ8AARsAARjoFuwAnWRkFEje3ACmwK7AAAQADABMAFgAiAAEAZQAAAFEADP8AFgAFBwBmBwBsBwBsBwBsAQABBwBtBA4OAv8AHgAJBwBmBwBsBwBsBwBsAQcAbAcAcgcAbAEAAPoAYvgABw79AFwHAEYHAGz7AEH5AAsAcAAAAAQAAQAiAAAAcwB0AAIAYgAAAVkABAAQAAABCRIMOgcstgBLEkwSTbYAThJNtgBPOggZCAMytgBLuAA+VxkIBDI6CRkJGQgFMhkIBjK4AFA6ChkKuQBRAQA6CxkLLbkAUgIAOgwZDLkAUwEAOg0VBpkAVAQ2DhUOGQ25AFQBAKMALxkNFQ65AFUCADoPuwAWWbcAFxkHtgAZGQ+2ABkZBLYAGbYAGjoHhA4Bp//LuwAWWbcAFxkHtgAZGQW2ABm2ABo6BxkMuQBWAQCZAFcENg4VDhkNuQBUAQCjAC8ZDBUOuQBXAgA6D7sAFlm3ABcZB7YAGRkPtgAZGQS2ABm2ABo6B4QOAaf/y7sAFlm3ABcZB7YAGRkFtgAZtgAaOgen/6UZB7AAAAABAGUAAAA+AAb/AFoADwcAZgcAbAcAbAcAbAcAbAcAbAEHAGwHAHUHAGwHAHYHAHcHAHgHAHkBAAD6ADcV/AAMAfoANxgAcAAAAAQAAQAiAAAAegB7AAIAYgAAACQABwAGAAAAGBJYThJZOgQSDDoFKissLRkEGQUDtgBasAAAAAAAcAAAAAQAAQAiAAA=',
      [arg1]: '#{newbase64::encode}',
      [arg2]: '#{newbase64::conn}'
    },
    show_tables: {
      _: 'yv66vgAAADMBMAoAQwB9BwB+CgACAH8KAAIAgAgAgQkAXQCCCACDCQBdAIQIAIUJAF0AhgcAhwgAiAoACwCJCACKCACLCACMCACNCACOCACPCwCQAJELAJIAkwsAkACTBwCUCgAXAH0LAJIAlQoAFwCWCgAXAJcKAF0AmAoAXQCZCgALAJoKAF0AmwoACwCXCgACAJwKAJ0AngcAnwgAoAoAIwCXCAChCgAoAKIHAKMKACgApAoAKAClCgCmAKcKACgAqAgAqQgAqgoAKACrBwCsCgAoAK0KADAArgoAKACvCgAoALAKABcAsQgAsgoAMACzCAC0CgAwALUIALYKALcAuAgAuQoAKAC6CAC7CgBBALwIAL0HAL4KAEEAvwcAwAoAwQDCCgBDAMMIAHMHAMQIAMUKAEEAxgoAxwDICADJCgAoAMoIAMsIAMwKACgAzQoAKADOCgDPANALANEA0gsA0wDUCwDVANYLANcA2AsA1wDZCwDVANoLANUA2wgA3AgA3QgA3goAXQDfBwDgAQAHZW5jb2RlcgEAEkxqYXZhL2xhbmcvU3RyaW5nOwEAAmNzAQAMcmFuZG9tUHJlZml4AQAGPGluaXQ+AQADKClWAQAEQ29kZQEABmVxdWFscwEAFShMamF2YS9sYW5nL09iamVjdDspWgEADVN0YWNrTWFwVGFibGUHAOAHAMAHAH4HAOEHAOIHAIcHAKMHAJ8BAAJFQwEASihMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKRXhjZXB0aW9ucwEABmRlY29kZQcArAEACmV4ZWN1dGVTUUwBAG8oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7WilMamF2YS9sYW5nL1N0cmluZzsHAOMHAOQHAOUHAOYHAOcBAApzaG93VGFibGVzDABiAGMBAB1qYXZheC9zZXJ2bGV0L2pzcC9QYWdlQ29udGV4dAwA6ADpDADqAOsBABRhbnRzd29yZHJhbmRvbVByZWZpeAwAYQBfAQAGYmFzZTY0DABeAF8BAA9hbnRzd29yZENoYXJzZXQMAGAAXwEAFmphdmEvbGFuZy9TdHJpbmdCdWZmZXIBAAAMAGIA7AEAAy0+fAEAA3w8LQEAEWFudHN3b3JkYXJnZW5jb2RlAQAPYW50c3dvcmRhcmdjb25uAQANYW50c3dvcmRhcmdkYgEACXRleHQvaHRtbAcA4gwA7QDsBwDhDADuAOwBABdqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcgwA7wDwDADxAPIMAPMA9AwAcwBxDABwAHEMAPEA9QwAfABxDAD2APcHAPgMAPkA7AEAE2phdmEvbGFuZy9FeGNlcHRpb24BAAlFUlJPUjovLyABAANoZXgMAGUAZgEAEGphdmEvbGFuZy9TdHJpbmcMAPoA+wwAYgD8BwD9DAD+AP8MAQABAQEABG51bGwBABAwMTIzNDU2Nzg5QUJDREVGDAECAPQBAB1qYXZhL2lvL0J5dGVBcnJheU91dHB1dFN0cmVhbQwBAwEEDABiAQUMAQYBBwwBCAEJDADxAQoBAAEsDAELAQUBAAVVVEYtOAwA8wDwAQAMamF2YS52ZXJzaW9uBwEMDAENAPABAAMxLjkMAQ4A/wEAEGphdmEudXRpbC5CYXNlNjQMAQ8BEAEACmdldERlY29kZXIBAA9qYXZhL2xhbmcvQ2xhc3MMAREBEgEAEGphdmEvbGFuZy9PYmplY3QHARMMARQBFQwBFgEXAQACW0IBABZzdW4ubWlzYy5CQVNFNjREZWNvZGVyDAEYARkHARoMARsBHAEADGRlY29kZUJ1ZmZlcgwBHQD0AQACDQoBAAEKDAEeAR8MASABIQcBIgwBIwEkBwDkDAElASYHAOUMAScBKAcA5gwBKQEqBwDnDAErAQQMASwBAQwBLQEuDAEvAQEBAEdTRUxFQ1QgVEFCTEVfTkFNRSBGUk9NIChTRUxFQ1QgVEFCTEVfTkFNRSBGUk9NIEFMTF9UQUJMRVMgV0hFUkUgT1dORVI9JwEADScgT1JERVIgQlkgMSkBAAEJDAB1AHYBAAtTaG93X3RhYmxlcwEAHGphdmF4L3NlcnZsZXQvU2VydmxldFJlcXVlc3QBAB1qYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXNwb25zZQEAE1tMamF2YS9sYW5nL1N0cmluZzsBABNqYXZhL3NxbC9Db25uZWN0aW9uAQASamF2YS9zcWwvU3RhdGVtZW50AQASamF2YS9zcWwvUmVzdWx0U2V0AQAaamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGEBAApnZXRSZXF1ZXN0AQAgKClMamF2YXgvc2VydmxldC9TZXJ2bGV0UmVxdWVzdDsBAAtnZXRSZXNwb25zZQEAISgpTGphdmF4L3NlcnZsZXQvU2VydmxldFJlc3BvbnNlOwEAFShMamF2YS9sYW5nL1N0cmluZzspVgEADnNldENvbnRlbnRUeXBlAQAUc2V0Q2hhcmFjdGVyRW5jb2RpbmcBAAxnZXRQYXJhbWV0ZXIBACYoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEABmFwcGVuZAEALShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWlsZGVyOwEACHRvU3RyaW5nAQAUKClMamF2YS9sYW5nL1N0cmluZzsBACwoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVmZmVyOwEABmdldE91dAEAHygpTGphdmF4L3NlcnZsZXQvanNwL0pzcFdyaXRlcjsBABtqYXZheC9zZXJ2bGV0L2pzcC9Kc3BXcml0ZXIBAAVwcmludAEACGdldEJ5dGVzAQAEKClbQgEAFyhbQkxqYXZhL2xhbmcvU3RyaW5nOylWAQARamF2YS9sYW5nL0ludGVnZXIBAAhwYXJzZUludAEAFShMamF2YS9sYW5nL1N0cmluZzspSQEACXN1YnN0cmluZwEAFShJKUxqYXZhL2xhbmcvU3RyaW5nOwEAC3RvVXBwZXJDYXNlAQAGbGVuZ3RoAQADKClJAQAEKEkpVgEABmNoYXJBdAEABChJKUMBAAdpbmRleE9mAQAEKEkpSQEAHChJKUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAV3cml0ZQEAEGphdmEvbGFuZy9TeXN0ZW0BAAtnZXRQcm9wZXJ0eQEACWNvbXBhcmVUbwEAB2Zvck5hbWUBACUoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvQ2xhc3M7AQAJZ2V0TWV0aG9kAQBAKExqYXZhL2xhbmcvU3RyaW5nO1tMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kOwEAGGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZAEABmludm9rZQEAOShMamF2YS9sYW5nL09iamVjdDtbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEACGdldENsYXNzAQATKClMamF2YS9sYW5nL0NsYXNzOwEAFmdldERlY2xhcmVkQ29uc3RydWN0b3IBADMoW0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9Db25zdHJ1Y3RvcjsBAB1qYXZhL2xhbmcvcmVmbGVjdC9Db25zdHJ1Y3RvcgEAC25ld0luc3RhbmNlAQAnKFtMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAEdHJpbQEAB3JlcGxhY2UBAEQoTGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7TGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7KUxqYXZhL2xhbmcvU3RyaW5nOwEABXNwbGl0AQAnKExqYXZhL2xhbmcvU3RyaW5nOylbTGphdmEvbGFuZy9TdHJpbmc7AQAWamF2YS9zcWwvRHJpdmVyTWFuYWdlcgEADWdldENvbm5lY3Rpb24BAE0oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9Db25uZWN0aW9uOwEAD2NyZWF0ZVN0YXRlbWVudAEAFigpTGphdmEvc3FsL1N0YXRlbWVudDsBAAxleGVjdXRlUXVlcnkBACgoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9SZXN1bHRTZXQ7AQALZ2V0TWV0YURhdGEBAB4oKUxqYXZhL3NxbC9SZXN1bHRTZXRNZXRhRGF0YTsBAA5nZXRDb2x1bW5Db3VudAEADWdldENvbHVtbk5hbWUBAARuZXh0AQADKClaAQAJZ2V0U3RyaW5nACEAXQBDAAAAAwABAF4AXwAAAAEAYABfAAAAAQBhAF8AAAAGAAEAYgBjAAEAZAAAABEAAQABAAAABSq3AAGxAAAAAAABAGUAZgABAGQAAAGsAAUADwAAAWErwAACTSy2AANOLLYABDoEKhIFtQAGKhIHtQAIKhIJtQAKuwALWRIMtwANOgW7AAtZEgy3AA06BhIOOgcSDzoIEhA6CRIROgoSEjoLGQQSE7kAFAIALSq0AAq5ABUCABkEKrQACrkAFgIAKiq7ABdZtwAYLRkJuQAZAgC2ABoSDLYAGrYAGyq0AAgqtAAKtgAcKrQACCq0AAq2AB06DCoquwAXWbcAGC0ZCrkAGQIAtgAaEgy2ABq2ABsqtAAIKrQACrYAHCq0AAgqtAAKtgAdOg0qKrsAF1m3ABgtGQu5ABkCALYAGhIMtgAatgAbKrQACCq0AAq2ABwqtAAIKrQACrYAHToOGQUZB7YAHlcZBioZDBkNGQ62AB+2AB5XGQUZBrYAILYAHlcZBRkItgAeVyy2ACEZBbYAILYAIqcAIjoMGQa7ABdZtwAYEiS2ABoZDLYAJbYAGrYAG7YAHlcErAABAEwBPQFAACMAAQBnAAAAMQAC/wFAAAwHAGgHAGkHAGoHAGsHAGwHAG0HAG0HAG4HAG4HAG4HAG4HAG4AAQcAbx4AAABwAHEAAgBkAAAANAAEAAQAAAAeLBImtgAnmgAJLBImpgAFK7C7AChZK7YAKS23ACqwAAAAAQBnAAAABAACDwEAcgAAAAQAAQAjAAAAcwBxAAIAZAAAAe0ABgAJAAABggM2BCq0AAa4ACs2BCsVBLYALEynAAg6BQM2BCwSJrYAJ5oACSwSJqYAnysSLaUADCsSLbYAJ5kABhIMsBIuOgUrtgAvTLsAMFkrtgAxBWy3ADI6BhIMOgcDNggVCCu2ADGiAF27ABdZtwAYGQe2ABoZBSsVCLYAM7YANAd4GQUrFQgEYLYAM7YANIC2ADUSNrYAGrYAGzoHGQYZBSsVCLYAM7YANAd4GQUrFQgEYLYAM7YANIC2ADeECAKn/6AZBhI4tgA5sCwSB7YAJ5oACSwSB6YArgE6BRI6uAA7OgYZBhI8tgA9mwBMEj64AD86BxkHEkADvQBBtgBCGQcDvQBDtgBEOggZCLYARRJGBL0AQVkDEwAoU7YAQhkIBL0AQ1kDK1O2AETAAEfAAEc6BacARRJIuAA/OgcZBwO9AEG2AEkDvQBDtgBKOggZCLYARRJLBL0AQVkDEwAoU7YAQhkIBL0AQ1kDK1O2AETAAEfAAEc6BbsAKFkZBRI4twAqsCuwAAEAAwATABYAIwABAGcAAABRAAz/ABYABQcAaAcAbgcAbgcAbgEAAQcAbwQODgL/AB4ACQcAaAcAbgcAbgcAbgEHAG4HAHQHAG4BAAD6AGL4AAcO/QBcBwBHBwBu+wBB+QALAHIAAAAEAAEAIwAAAHUAdgACAGQAAAFZAAQAEAAAAQkSDDoHLLYATBJNEk62AE8STrYAUDoIGQgDMrYATLgAP1cZCAQyOgkZCRkIBTIZCAYyuABROgoZCrkAUgEAOgsZCy25AFMCADoMGQy5AFQBADoNFQaZAFQENg4VDhkNuQBVAQCjAC8ZDRUOuQBWAgA6D7sAF1m3ABgZB7YAGhkPtgAaGQS2ABq2ABs6B4QOAaf/y7sAF1m3ABgZB7YAGhkFtgAatgAbOgcZDLkAVwEAmQBXBDYOFQ4ZDbkAVQEAowAvGQwVDrkAWAIAOg+7ABdZtwAYGQe2ABoZD7YAGhkEtgAatgAbOgeEDgGn/8u7ABdZtwAYGQe2ABoZBbYAGrYAGzoHp/+lGQewAAAAAQBnAAAAPgAG/wBaAA8HAGgHAG4HAG4HAG4HAG4HAG4BBwBuBwB3BwBuBwB4BwB5BwB6BwB7AQAA+gA3FfwADAH6ADcYAHIAAAAEAAEAIwAAAHwAcQACAGQAAAA8AAcABwAAADC7ABdZtwAYElm2ABottgAaElq2ABq2ABs6BBJbOgUSDDoGKissGQQZBRkGA7YAXLAAAAAAAHIAAAAEAAEAIwAA',
      [arg1]: '#{newbase64::encode}',
      [arg2]: '#{newbase64::conn}',
      [arg3]: '#{newbase64::db}'
    },
    show_columns: {
      _: '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dmF4L3NlcnZsZXQvU2VydmxldFJlc3BvbnNlAQATW0xqYXZhL2xhbmcvU3RyaW5nOwEAE2phdmEvc3FsL0Nvbm5lY3Rpb24BABJqYXZhL3NxbC9TdGF0ZW1lbnQBABJqYXZhL3NxbC9SZXN1bHRTZXQBABpqYXZhL3NxbC9SZXN1bHRTZXRNZXRhRGF0YQEACmdldFJlcXVlc3QBACAoKUxqYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXF1ZXN0OwEAC2dldFJlc3BvbnNlAQAhKClMamF2YXgvc2VydmxldC9TZXJ2bGV0UmVzcG9uc2U7AQAVKExqYXZhL2xhbmcvU3RyaW5nOylWAQAOc2V0Q29udGVudFR5cGUBABRzZXRDaGFyYWN0ZXJFbmNvZGluZwEADGdldFBhcmFtZXRlcgEAJihMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAGYXBwZW5kAQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAIdG9TdHJpbmcBABQoKUxqYXZhL2xhbmcvU3RyaW5nOwEALChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWZmZXI7AQAGZ2V0T3V0AQAfKClMamF2YXgvc2VydmxldC9qc3AvSnNwV3JpdGVyOwEAG2phdmF4L3NlcnZsZXQvanNwL0pzcFdyaXRlcgEABXByaW50AQAIZ2V0Qnl0ZXMBAAQoKVtCAQAXKFtCTGphdmEvbGFuZy9TdHJpbmc7KVYBABFqYXZhL2xhbmcvSW50ZWdlcgEACHBhcnNlSW50AQAVKExqYXZhL2xhbmcvU3RyaW5nOylJAQAJc3Vic3RyaW5nAQAVKEkpTGphdmEvbGFuZy9TdHJpbmc7AQALdG9VcHBlckNhc2UBAAZsZW5ndGgBAAMoKUkBAAQoSSlWAQAGY2hhckF0AQAEKEkpQwEAB2luZGV4T2YBAAQoSSlJAQAcKEkpTGphdmEvbGFuZy9TdHJpbmdCdWlsZGVyOwEABXdyaXRlAQAQamF2YS9sYW5nL1N5c3RlbQEAC2dldFByb3BlcnR5AQAJY29tcGFyZVRvAQAHZm9yTmFtZQEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9DbGFzczsBAAlnZXRNZXRob2QBAEAoTGphdmEvbGFuZy9TdHJpbmc7W0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2Q7AQAYamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kAQAGaW52b2tlAQA5KExqYXZhL2xhbmcvT2JqZWN0O1tMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAIZ2V0Q2xhc3MBABMoKUxqYXZhL2xhbmcvQ2xhc3M7AQAWZ2V0RGVjbGFyZWRDb25zdHJ1Y3RvcgEAMyhbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L0NvbnN0cnVjdG9yOwEAHWphdmEvbGFuZy9yZWZsZWN0L0NvbnN0cnVjdG9yAQALbmV3SW5zdGFuY2UBACcoW0xqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBAAR0cmltAQAHcmVwbGFjZQEARChMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTtMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTspTGphdmEvbGFuZy9TdHJpbmc7AQAFc3BsaXQBACcoTGphdmEvbGFuZy9TdHJpbmc7KVtMamF2YS9sYW5nL1N0cmluZzsBABZqYXZhL3NxbC9Ecml2ZXJNYW5hZ2VyAQANZ2V0Q29ubmVjdGlvbgEATShMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL0Nvbm5lY3Rpb247AQAPY3JlYXRlU3RhdGVtZW50AQAWKClMamF2YS9zcWwvU3RhdGVtZW50OwEADGV4ZWN1dGVRdWVyeQEAKChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL1Jlc3VsdFNldDsBAAtnZXRNZXRhRGF0YQEAHigpTGphdmEvc3FsL1Jlc3VsdFNldE1ldGFEYXRhOwEADmdldENvbHVtbkNvdW50AQANZ2V0Q29sdW1uTmFtZQEABG5leHQBAAMoKVoBAAlnZXRTdHJpbmcAIQBfAEQAAAADAAEAYABhAAAAAQBiAGEAAAABAGMAYQAAAAYAAQBkAGUA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',
      [arg1]: '#{newbase64::encode}',
      [arg2]: '#{newbase64::conn}',
      [arg3]: '#{newbase64::db}',
      [arg4]: '#{newbase64::table}'
    },
    query: {
      _: 'yv66vgAAADMBLAoAQwB7BwB8CgACAH0KAAIAfggAfwkAWwCACACBCQBbAIIIAIMJAFsAhAcAhQgAhgoACwCHCACICACJCACKCACLCACMCACNCwCOAI8LAJAAkQsAjgCRBwCSCgAXAHsLAJAAkwoAFwCUCgAXAJUKAFsAlgoAWwCXCgALAJgKAFsAmQoACwCVCgACAJoKAJsAnAcAnQgAngoAIwCVCACfCgAoAKAHAKEKACgAogoAKACjCgCkAKUKACgApggApwgAqAoAKACpBwCqCgAoAKsKADAArAoAKACtCgAoAK4KABcArwgAsAoAMACxCACyCgAwALMIALQKALUAtggAtwoAKAC4CAC5CgBBALoIALsHALwKAEEAvQcAvgoAvwDACgBDAMEIAHEHAMIIAMMKAEEAxAoAxQDGCADHCgAoAMgIAMkIAMoKACgAywoAKADMCgDNAM4LAM8A0AsA0QDSCwDTANQLANUA1gsA1QDXCwDTANgLANMA2QgA2goAWwDbBwDcAQAHZW5jb2RlcgEAEkxqYXZhL2xhbmcvU3RyaW5nOwEAAmNzAQAMcmFuZG9tUHJlZml4AQAGPGluaXQ+AQADKClWAQAEQ29kZQEABmVxdWFscwEAFShMamF2YS9sYW5nL09iamVjdDspWgEADVN0YWNrTWFwVGFibGUHANwHAL4HAHwHAN0HAN4HAIUHAKEHAJ0BAAJFQwEASihMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKRXhjZXB0aW9ucwEABmRlY29kZQcAqgEACmV4ZWN1dGVTUUwBAG8oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7WilMamF2YS9sYW5nL1N0cmluZzsHAN8HAOAHAOEHAOIHAOMBAAVxdWVyeQwAYABhAQAdamF2YXgvc2VydmxldC9qc3AvUGFnZUNvbnRleHQMAOQA5QwA5gDnAQAUYW50c3dvcmRyYW5kb21QcmVmaXgMAF8AXQEABmJhc2U2NAwAXABdAQAPYW50c3dvcmRDaGFyc2V0DABeAF0BABZqYXZhL2xhbmcvU3RyaW5nQnVmZmVyAQAADABgAOgBAAMtPnwBAAN8PC0BABFhbnRzd29yZGFyZ2VuY29kZQEAD2FudHN3b3JkYXJnY29ubgEADmFudHN3b3JkYXJnc3FsAQAJdGV4dC9odG1sBwDeDADpAOgHAN0MAOoA6AEAF2phdmEvbGFuZy9TdHJpbmdCdWlsZGVyDADrAOwMAO0A7gwA7wDwDABxAG8MAG4AbwwA7QDxDAB6AG8MAPIA8wcA9AwA9QDoAQATamF2YS9sYW5nL0V4Y2VwdGlvbgEACUVSUk9SOi8vIAEAA2hleAwAYwBkAQAQamF2YS9sYW5nL1N0cmluZwwA9gD3DABgAPgHAPkMAPoA+wwA/AD9AQAEbnVsbAEAEDAxMjM0NTY3ODlBQkNERUYMAP4A8AEAHWphdmEvaW8vQnl0ZUFycmF5T3V0cHV0U3RyZWFtDAD/AQAMAGABAQwBAgEDDAEEAQUMAO0BBgEAASwMAQcBAQEABVVURi04DADvAOwBAAxqYXZhLnZlcnNpb24HAQgMAQkA7AEAAzEuOQwBCgD7AQAQamF2YS51dGlsLkJhc2U2NAwBCwEMAQAKZ2V0RGVjb2RlcgEAD2phdmEvbGFuZy9DbGFzcwwBDQEOAQAQamF2YS9sYW5nL09iamVjdAcBDwwBEAERDAESARMBAAJbQgEAFnN1bi5taXNjLkJBU0U2NERlY29kZXIMARQBFQcBFgwBFwEYAQAMZGVjb2RlQnVmZmVyDAEZAPABAAINCgEAAQoMARoBGwwBHAEdBwEeDAEfASAHAOAMASEBIgcA4QwBIwEkBwDiDAElASYHAOMMAScBAAwBKAD9DAEpASoMASsA/QEAAwl8CQwAcwB0AQAFUXVlcnkBABxqYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXF1ZXN0AQAdamF2YXgvc2VydmxldC9TZXJ2bGV0UmVzcG9uc2UBABNbTGphdmEvbGFuZy9TdHJpbmc7AQATamF2YS9zcWwvQ29ubmVjdGlvbgEAEmphdmEvc3FsL1N0YXRlbWVudAEAEmphdmEvc3FsL1Jlc3VsdFNldAEAGmphdmEvc3FsL1Jlc3VsdFNldE1ldGFEYXRhAQAKZ2V0UmVxdWVzdAEAICgpTGphdmF4L3NlcnZsZXQvU2VydmxldFJlcXVlc3Q7AQALZ2V0UmVzcG9uc2UBACEoKUxqYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXNwb25zZTsBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBAA5zZXRDb250ZW50VHlwZQEAFHNldENoYXJhY3RlckVuY29kaW5nAQAMZ2V0UGFyYW1ldGVyAQAmKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAAZhcHBlbmQBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAAZnZXRPdXQBAB8oKUxqYXZheC9zZXJ2bGV0L2pzcC9Kc3BXcml0ZXI7AQAbamF2YXgvc2VydmxldC9qc3AvSnNwV3JpdGVyAQAFcHJpbnQBAAhnZXRCeXRlcwEABCgpW0IBABcoW0JMamF2YS9sYW5nL1N0cmluZzspVgEAEWphdmEvbGFuZy9JbnRlZ2VyAQAIcGFyc2VJbnQBABUoTGphdmEvbGFuZy9TdHJpbmc7KUkBAAlzdWJzdHJpbmcBABUoSSlMamF2YS9sYW5nL1N0cmluZzsBAAt0b1VwcGVyQ2FzZQEABmxlbmd0aAEAAygpSQEABChJKVYBAAZjaGFyQXQBAAQoSSlDAQAHaW5kZXhPZgEABChJKUkBABwoSSlMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAFd3JpdGUBABBqYXZhL2xhbmcvU3lzdGVtAQALZ2V0UHJvcGVydHkBAAljb21wYXJlVG8BAAdmb3JOYW1lAQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL0NsYXNzOwEACWdldE1ldGhvZAEAQChMamF2YS9sYW5nL1N0cmluZztbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZDsBABhqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2QBAAZpbnZva2UBADkoTGphdmEvbGFuZy9PYmplY3Q7W0xqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBAAhnZXRDbGFzcwEAEygpTGphdmEvbGFuZy9DbGFzczsBABZnZXREZWNsYXJlZENvbnN0cnVjdG9yAQAzKFtMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvQ29uc3RydWN0b3I7AQAdamF2YS9sYW5nL3JlZmxlY3QvQ29uc3RydWN0b3IBAAtuZXdJbnN0YW5jZQEAJyhbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEABHRyaW0BAAdyZXBsYWNlAQBEKExqYXZhL2xhbmcvQ2hhclNlcXVlbmNlO0xqYXZhL2xhbmcvQ2hhclNlcXVlbmNlOylMamF2YS9sYW5nL1N0cmluZzsBAAVzcGxpdAEAJyhMamF2YS9sYW5nL1N0cmluZzspW0xqYXZhL2xhbmcvU3RyaW5nOwEAFmphdmEvc3FsL0RyaXZlck1hbmFnZXIBAA1nZXRDb25uZWN0aW9uAQBNKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvQ29ubmVjdGlvbjsBAA9jcmVhdGVTdGF0ZW1lbnQBABYoKUxqYXZhL3NxbC9TdGF0ZW1lbnQ7AQAMZXhlY3V0ZVF1ZXJ5AQAoKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvUmVzdWx0U2V0OwEAC2dldE1ldGFEYXRhAQAeKClMamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGE7AQAOZ2V0Q29sdW1uQ291bnQBAA1nZXRDb2x1bW5OYW1lAQAEbmV4dAEAAygpWgEACWdldFN0cmluZwAhAFsAQwAAAAMAAQBcAF0AAAABAF4AXQAAAAEAXwBdAAAABgABAGAAYQABAGIAAAARAAEAAQAAAAUqtwABsQAAAAAAAQBjAGQAAQBiAAABrAAFAA8AAAFhK8AAAk0stgADTiy2AAQ6BCoSBbUABioSB7UACCoSCbUACrsAC1kSDLcADToFuwALWRIMtwANOgYSDjoHEg86CBIQOgkSEToKEhI6CxkEEhO5ABQCAC0qtAAKuQAVAgAZBCq0AAq5ABYCACoquwAXWbcAGC0ZCbkAGQIAtgAaEgy2ABq2ABsqtAAIKrQACrYAHCq0AAgqtAAKtgAdOgwqKrsAF1m3ABgtGQq5ABkCALYAGhIMtgAatgAbKrQACCq0AAq2ABwqtAAIKrQACrYAHToNKiq7ABdZtwAYLRkLuQAZAgC2ABoSDLYAGrYAGyq0AAgqtAAKtgAcKrQACCq0AAq2AB06DhkFGQe2AB5XGQYqGQwZDRkOtgAftgAeVxkFGQa2ACC2AB5XGQUZCLYAHlcstgAhGQW2ACC2ACKnACI6DBkGuwAXWbcAGBIktgAaGQy2ACW2ABq2ABu2AB5XBKwAAQBMAT0BQAAjAAEAZQAAADEAAv8BQAAMBwBmBwBnBwBoBwBpBwBqBwBrBwBrBwBsBwBsBwBsBwBsBwBsAAEHAG0eAAAAbgBvAAIAYgAAADQABAAEAAAAHiwSJrYAJ5oACSwSJqYABSuwuwAoWSu2ACkttwAqsAAAAAEAZQAAAAQAAg8BAHAAAAAEAAEAIwAAAHEAbwACAGIAAAHtAAYACQAAAYIDNgQqtAAGuAArNgQrFQS2ACxMpwAIOgUDNgQsEia2ACeaAAksEiamAJ8rEi2lAAwrEi22ACeZAAYSDLASLjoFK7YAL0y7ADBZK7YAMQVstwAyOgYSDDoHAzYIFQgrtgAxogBduwAXWbcAGBkHtgAaGQUrFQi2ADO2ADQHeBkFKxUIBGC2ADO2ADSAtgA1Eja2ABq2ABs6BxkGGQUrFQi2ADO2ADQHeBkFKxUIBGC2ADO2ADSAtgA3hAgCp/+gGQYSOLYAObAsEge2ACeaAAksEgemAK4BOgUSOrgAOzoGGQYSPLYAPZsATBI+uAA/OgcZBxJAA70AQbYAQhkHA70AQ7YARDoIGQi2AEUSRgS9AEFZAxMAKFO2AEIZCAS9AENZAytTtgBEwABHwABHOgWnAEUSSLgAPzoHGQcDvQBBtgBJA70AQ7YASjoIGQi2AEUSSwS9AEFZAxMAKFO2AEIZCAS9AENZAytTtgBEwABHwABHOgW7AChZGQUSOLcAKrArsAABAAMAEwAWACMAAQBlAAAAUQAM/wAWAAUHAGYHAGwHAGwHAGwBAAEHAG0EDg4C/wAeAAkHAGYHAGwHAGwHAGwBBwBsBwByBwBsAQAA+gBi+AAHDv0AXAcARwcAbPsAQfkACwBwAAAABAABACMAAABzAHQAAgBiAAABWQAEABAAAAEJEgw6Byy2AEwSTRJOtgBPEk62AFA6CBkIAzK2AEy4AD9XGQgEMjoJGQkZCAUyGQgGMrgAUToKGQq5AFIBADoLGQstuQBTAgA6DBkMuQBUAQA6DRUGmQBUBDYOFQ4ZDbkAVQEAowAvGQ0VDrkAVgIAOg+7ABdZtwAYGQe2ABoZD7YAGhkEtgAatgAbOgeEDgGn/8u7ABdZtwAYGQe2ABoZBbYAGrYAGzoHGQy5AFcBAJkAVwQ2DhUOGQ25AFUBAKMALxkMFQ65AFgCADoPuwAXWbcAGBkHtgAaGQ+2ABoZBLYAGrYAGzoHhA4Bp//LuwAXWbcAGBkHtgAaGQW2ABq2ABs6B6f/pRkHsAAAAAEAZQAAAD4ABv8AWgAPBwBmBwBsBwBsBwBsBwBsBwBsAQcAbAcAdQcAbAcAdgcAdwcAeAcAeQEAAPoANxX8AAwB+gA3GABwAAAABAABACMAAAB6AG8AAgBiAAAAIQAHAAYAAAAVElk6BBJNOgUqKywtGQQZBQS2AFqwAAAAAABwAAAABAABACMAAA==',
      [arg1]: '#{newbase64::encode}',
      [arg2]: '#{newbase64::conn}',
      [arg3]: '#{newbase64::sql}'
    }
  })
